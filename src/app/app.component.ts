import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-header></my-header><router-outlet></router-outlet><footer class="bg-info">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container soc_icns">
              <a class="navbar-brand" href="#"><p>© <script type="text/javascript"> var d = new Date(); var curr_year = d.getFullYear(); document.write(curr_year)</script>2018 AJIO Ltd. All rights reserved.</p></a>
              <div class="row">
                <div class="col-3"><a class="fb" title="ajio on Facebook" rel="nofollow" href="https://www.facebook.com/ajio" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
                <div class="col-3"><a class="inst" title="ajio on Instagram" rel="nofollow" href="https://www.instagram.com/ajio/?hl=en" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
                <div class="col-3"><a class="gp" title="ajio on Google+" rel="nofollow" href="https://plus.google.com/+ajio" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></div>
                <div class="col-3"><a class="tw" title="ajio on Twitter" rel="nofollow" href="https://twitter.com/ajio" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
              </div>
              </div>
        </nav>
  </footer>
`,
})
export class AppComponent  { name = 'Angular'; }
