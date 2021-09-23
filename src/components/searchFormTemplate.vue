<template>
  <div class="search-vehicle">
    <slot name="title" class="title">
      <p>Search for Your Vehicle!</p>
    </slot>   
    <div>  
      <slot name="field" class="field">
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
      </slot>        
      <div class="btn btn-search">Search</div>
      <router-link :to="{name:'Advance'}" class="btn btn-advanceSearch">
                <div >Advanced Search</div>
      </router-link>
    </div>
  </div>
</template>
<style>

</style>