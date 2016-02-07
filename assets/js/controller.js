import * as models from 'assets/js/models';
import * as views from 'assets/js/views';
import * as settings from 'assets/js/settings';

export function init() {
  var image = new models.Image({
    width: settings.image_width,
    height: settings.image_height
  });

  var textList = new models.TextList();

  var imageview = new views.ImageView({
    model: image
  });
  var listview = new views.ListView({
    collection: textList
  });
  var sideview = new views.SideView();

  // render views
  imageview.render();
  sideview.render();
  sideview.showChildView('nav', new views.NavView());
  sideview.showChildView('list', listview);

  $('input[name=textRadio]:first').focus();
}
