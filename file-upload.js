/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 3/13/18
 **/
const fileUploadMixin = {
  data: {
    image: null,
    file: null,
  },
  methods: {

    imagePicker() {
      $('.fileInput').click();
    },

    /**
     * get hold of the file selected
     * create image from the file
     * @param e
     */
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.file = files[0];
      this.createImage(files[0]);
    },
    /**
     * image created to be displayed by <img>
     * @param file
     */
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    /**
     * incase the file that is to be sent to the server
     * might be a string
     * @param file
     * @returns {Promise<any>}
     */
    convertToBase64(file) {

      return new Promise((resolve, reject) => {

        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);

          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        }
        else {
          resolve(null);
        }
      });
    },
  },
};