<div> 
        <label class="g-selectBlock-label"<% if $selectId %> for="{$selectId}"<% end_if %>> 
          {$label}

        </label> 
        <select class="g-selectBlock-select<% if $hasError %>  g-selectBlock-select--error<% end_if %>"<% if $selectId %> id="{$selectId}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $multiple %> multiple="<% if $multiple %>undefined<% end_if %>"<% end_if %>> {$children}
</select> 
      </div>