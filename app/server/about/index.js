(function(){
  exports.index = function(req, res){
    return res.render("index", {
      title: "Index Page"
    });
  };
  exports.about = function(req, res){
    return res.render("about/index", {
      title: 'About Page'
    });
  };
  exports.add_email = function(req, res){
    return res.render("auth/addemail");
  };
  exports.error = function(req, res){
    return res.render("error", {
      layout: 'splash'
    });
  };
}).call(this);
