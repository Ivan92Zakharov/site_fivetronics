module.exports = ['$resource', function ($resource) {
  return $resource('json/home/:id.json', {}, {
      query: {
        method:'GET',
        cache: true,
        params: {id:'quotes'},
        isArray: true
      }
    });
}];
