export function searchDog(name){
    switch (name) {
      case 'Hau_mei':
        return [
          require('../images/dog/Hau_mei/IMG_1047.jpg'),

        ];
      case 'A_gun':
        return [
          require('../images/dog/A_gun/IMG_2198.jpg'),

        ];
      case 'Lally':
        return [
            require('../images/dog/Lally/IMG_1131.jpg'),

        ];
      case 'A_Vai':
        return [
            require('../images/dog/avai/img2060.jpg'),

        ];
      case 'O_tun':
        return [
            require('../images/dog/otun/img1056.jpg'),

        ];
      case 'Jimmy':
        return [
            require('../images/dog/Jimmy/IMG_2254.jpg'),

        ];
      case 'Good_dog':
        return [
            require('../images/dog/gooddog/img4057.jpg'),

        ];
      case 'Superman':
        return [
            require('../images/dog/Superman/IMG_1582.jpg'),

        ];
      case 'Meatball':
        return [
            require('../images/dog/Meatball/IMG_2221.jpg'),

        ];
      case 'Sam':
        return [
            require('../images/dog/Sam/img4169.jpg'),

        ];
      case 'Golden':
        return [
            require('../images/dog/Golden/IMG_1644.jpg'),

        ];
      case 'Eric':
        return [
            require("../images/dog/Eric/img1490.jpg"),
          
        ];
      default:
        console.log("I'm default");
        return [
          require('../images/error_404.png')
        ];

    }
}
