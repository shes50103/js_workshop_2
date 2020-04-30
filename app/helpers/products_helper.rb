module ProductsHelper
  def display_tag_list(tags)
    result = ""
    tags.map(&:name).each do |name|
      result << "<button type='button' class='btn btn-outline-success'>#{name}</button> "
    end
    result.html_safe
  end
end
