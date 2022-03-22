---
name: Alabama
slug: alabama
layout: page

counties:
  - Add more here
---
<h1>{{ page.name }}</h1>
{% for county in page.counties %}
  <p>{{ county | replace: "_", " " }}</p>
{% endfor %}
