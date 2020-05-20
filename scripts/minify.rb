require 'open-uri'
require 'yaml'
require 'yui/compressor'

def minify(css)
  compressor = YUI::CssCompressor.new
  compressor.compress(css)
end

def get_css(url)
  url = url
    .gsub(/https:\/\/github\.com\/([^\/]+\/[^\/]+)\/blob\//,
          "https://raw.githubusercontent.com/\\1//")
    .gsub(/https:\/\/gitlab\.com\/([^\/]+\/[^\/]+)\/-\/blob\//,
          "https://gitlab.com/\\1/-/raw/")
  open(url).read
end

def strip_css(css)
  sourcemap = "# sourceMappingURL"
  select_none = "select \{\n  display: none;\n\}"
  css
    .gsub(/\n*\/\*#{sourcemap}.*\n*/, "")
    .gsub(/#{select_none}\n\n/, "")
end

def update_css(name, url)
  css_file = "../src/#{name}.css"
  minified_file = "../min/#{name}.min.css"

  css = get_css(url)
  css = strip_css(css)

  if !diff_css(css, name)
    puts "  >>  " + name + " css updating from " + url + "..."
    File.open(css_file, "w") { |f| f << css }
    File.open(minified_file, "w") { |f| f << minify(css) }
    puts "  Update complete."
  else
    puts "  No changes detected in " + name + " css"
  end
end

def diff_css(css, name)
  src = File.read("../src/" + name + ".css")
  css == src
end
