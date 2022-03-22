---
title: Areas Served
permalink: /areas-served/
layout: collection-page
collection: locations
menu: true
---
{%- assign collection = page.collection -%}
{%- assign locations = site[collection] -%}
{%- if locations -%}
  {%- for state in locations -%}
    <div class="location {{ state.slug }}">
      <h3>
        <a href="{{ state.url | relative_url }}">
          {{ state.name | capitalize }}
        </a>
      </h3>
      {%- if state.counties -%}
      <ul class="counties">
        {%- for county in state.counties limit: 10 -%}
          <li>{{ county | replace: "_", " " }}</li>
        {%- endfor -%}
      </ul>
      {%- endif -%}
    </div>
  {%- endfor -%}
{%- endif -%}
