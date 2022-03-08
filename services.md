---
title: Services
permalink: /services/
layout: collection-page
collection: services
menu: true
---
{% assign this_collection = page.collection %}
{% if site.services %}
  <section class="collection {{ this_collection }}">
  {% for item in site.services %}
    <div class="service" id="{{ item.name | slugify }}">
      <h3><a href="{{ item.url | relative_url }}">{{ item.name }}</a></h3>
      {% if item.excerpt %}
        <p>{{ item.excerpt }}</p>
      {% endif %}
    </div>
  {% endfor %}
{% endif %}
