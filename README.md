# File Upload Using Vue

This project describes how file can be selected and uploaded to server

## Project Demo


Version 1.0

Usage

Include fileUploadMixin in your mixins
```js
mixins: [fileUploadMixin]
```

```js
const vue = new Vue({
    el: '#app',
    data: {
      startCount: 0,
      endCount: 100
    },
    mixins: [fileUploadMixin],
    created() {
      // set default image if no image has been selected
      this.image = 'assets/image/default_image.png';
    },
    methods:{
      uploadImage(){

        // send base64 to server in place of file
        this.convertToBase64(this.file)
          .then(fileString => {

            // TODO: process base64 file
          })

        // send file to server
        const formData = new FormData();
        formData.append('file', this.file);

        // simulate file upload to server
        while(this.startCount < 100){

          this.startCount += 10;
        }
      }
    }
  });

```
