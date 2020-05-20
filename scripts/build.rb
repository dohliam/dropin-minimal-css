#!/usr/bin/env ruby

require 'yaml'

require_relative 'minify.rb'

def get_frameworks(data)
  frameworks = []

  data["frameworks"].each do |f|
    name = f[0]
    frameworks << name
  end
  frameworks
end

def get_collections(data)
  collections = {}

  data["collections"].each do |f|
    collection_name = f[0]
    collections[collection_name] = []
    f[1].each do |n|
      name = n[0]
      collections[collection_name] << name
    end
  end
  collections
end

def generate_switcher(data)
  frameworks = get_frameworks(data)
  collections = get_collections(data)

  switcher = 'var frameworks = "' + frameworks.sort.join(",") + "," + collections.values.flatten.join(",") + '";'
end

def update_js(switcher)
  switcher_file = "../switcher.js"
  switcher_txt = File.read(switcher_file)

  switcher_txt.gsub(/var frameworks = .*/, switcher)
end

def frameworks_attribution(data)
  frameworks = get_frameworks(data)
  list = ""

  frameworks.each do |name|
    root = data["frameworks"][name]
    url = root["url"]
    author = root["author"]
    repo = root["repo"]
    license = root["license"]
    license_url = root["license_url"]
    list << "* [#{name}](https://dohliam.github.io/dropin-minimal-css/?#{name}) by @#{author} ([Source](#{repo}) · [#{license}](#{license_url}))\n"
  end
  list
end

def collections_attribution(data)
  collections = get_collections(data)
  list = ""

  collections.each do |collection, names|
    names.each do |name|
      root = data["collections"][collection][name]
      author = root["author"]
      repo = root["repo"]
      url = root["url"]
      license = root["license"]
      license_url = root["license_url"]
      if name == "info"
        list << "* **[#{collection}](https://github.com/#{repo})** by @#{author}:\n"
        next
      end
      list << "  * [#{name}](https://dohliam.github.io/dropin-minimal-css/?#{name}) by @#{author} ([Source](#{repo}) · [#{license}](#{license_url}))\n"
    end
  end
  list
end

def update_readme(data)
  readme_file = "../README.md"
  readme_txt = File.read(readme_file)

  frameworks_list = frameworks_attribution(data)
  collections_list = collections_attribution(data)

  header_f = "### List of frameworks\n\n"
  header_c = "### Theme collections\n\n"
  out_f = header_f + frameworks_list + "\n###"
  out_c = header_c + collections_list + "\n##"

  readme = readme_txt
    .gsub(/#{header_f}.*?###/m, out_f)
    .gsub(/#{header_c}.*?##/m, out_c)

  File.open(readme_file, "w") {|f| f << readme }
end

def switcher_routine(data)
  puts "- Updating switcher.js file..."
  switcher = generate_switcher(data)
  js_file = "../switcher.js"
  new_switcher = update_js(switcher)
  File.open(js_file, "w") { |f| f << new_switcher }
  puts "  Update complete."
  puts
end

def frameworks_routine(data)
  puts "- Updating CSS frameworks..."
  frameworks = get_frameworks(data)

  frameworks.each do |name|
    root = data["frameworks"][name]
    url = root["url"]
    min_only = root["min_only"]
    update_css(name, url)
  end
  puts "  Update complete."
  puts
end

def collections_routine(data)
  puts "- Updating CSS collections..."
  collections = get_collections(data)

  collections.each do |collection, names|
    names.each do |name|
      if name == "info" then next end
      root = data["collections"][collection][name]
      url = root["url"]
      min_only = root["min_only"]
      update_css(name, url)
    end
  end
  puts "  Update complete."
  puts
end

def readme_routine(data)
  puts "- Updating readme file..."
  update_readme(data)
  puts "  Update complete."
  puts
end

def process_updates(data)
  frameworks_routine(data)
  collections_routine(data)
  switcher_routine(data)
  readme_routine(data)
end

data = YAML::load(File.read("frameworks.yml"))

process_updates(data)
