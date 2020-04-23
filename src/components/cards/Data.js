import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default {
  products: [
    {                    //! 1. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-1" defaultValue={2} max={5} /></Box>,
      id: 1, image: '/img1/b1.gif', image2: '/img2/p1.webp', name: 'Audi-cars',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 2. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-2" defaultValue={2} max={5} /></Box>,
      id: 2, image: '/img1/b2.png', image2: '/img2/p2.png', name: "McDonald's",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 3. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-3" defaultValue={2} max={5} /></Box>,
      id: 3, image: '/img1/b3.png', image2: '/img2/p3.gif', name: 'Chanel',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 4. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-4" defaultValue={2} max={5} /></Box>,
      id: 4, image: '/img1/b4.jpg', image2: '/img2/p4.jpg', name: "Lay's",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 5. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-5" defaultValue={2} max={5} /></Box>,
      id: 5, image: '/img1/b5.png', image2: '/img2/p5.jpg', name: 'Aldi',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 6. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-6" defaultValue={2} max={5} /></Box>,
      id: 6, image: '/img1/b6.jpg', image2: '/img2/p6.jpg', name: 'Mercedes',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 7. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-7" defaultValue={2} max={5} /></Box>,
      id: 7, image: '/img1/b7.jpg', image2: '/img2/p7.jpg', name: "Schwan'z",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 8. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-8" defaultValue={2} max={5} /></Box>,
      id: 8, image: '/img1/b8.png', image2: '/img2/p8.jpg', name: "BMW-cars",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 9. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-9" defaultValue={2} max={5} /></Box>,
      id: 9, image: '/img1/b9.png', image2: '/img2/p9.jpg', name: 'Rewe',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 10. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-10" defaultValue={2} max={5} /></Box>,
      id: 10, image: '/img1/b10.png', image2: '/img2/p10.jpg', name: "Lidl",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 11. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-11" defaultValue={2} max={5} /></Box>,
      id: 11, image: '/img1/b11.png', image2: '/img2/p11.jpg', name: 'Kaufland',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 12. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-12" defaultValue={2} max={5} /></Box>,
      id: 12, image: '/img1/b12.png', image2: '/img2/p12.jpg', name: "Medion",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 13. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-13" defaultValue={2} max={5} /></Box>,
      id: 13, image: '/img1/b13.svg', image2: '/img2/p13.jpg', name: 'Edeka',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 14. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-14" defaultValue={2} max={5} /></Box>,
      id: 14, image: '/img1/b14.jpg', image2: '/img2/p14.jpg', name: 'Sony',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 15. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-15" defaultValue={2} max={5} /></Box>,
      id: 15, image: '/img1/b15.gif', image2: '/img2/p15.jpg', name: 'Netto',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 16. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-16" defaultValue={2} max={5} /></Box>,
      id: 16, image: '/img1/b16.jpg', image2: '/img2/p16.jpg', name: "Lenovo",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 17. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-17" defaultValue={2} max={5} /></Box>,
      id: 17, image: '/img1/b17.webp', image2: '/img2/p17.PNG', name: 'NBA',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 18. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-18" defaultValue={2} max={5} /></Box>,
      id: 18, image: '/img1/b18.png', image2: '/img2/p18.jpg', name: 'Adidas',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 19. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-19" defaultValue={2} max={5} /></Box>,
      id: 19, image: '/img1/b19.jpg', image2: '/img2/p19.jpg', name: 'Samsung',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 20. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-20" defaultValue={2} max={5} /></Box>,
      id: 20, image: '/img1/b20.png', image2: '/img2/p20.jpg', name: "Apple",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 21. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-21" defaultValue={2} max={5} /></Box>,
      id: 21, image: '/img1/b21.gif', image2: '/img2/p21.jpg', name: 'Kappa',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 22. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-22" defaultValue={2} max={5} /></Box>,
      id: 22, image: '/img1/b22.png', image2: '/img2/p22.jpg', name: "Peugeot",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 23. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-23" defaultValue={2} max={5} /></Box>,
      id: 23, image: '/img1/b23.jpg', image2: '/img2/p23.jpg', name: 'Dell',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 24. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-24" defaultValue={2} max={5} /></Box>,
      id: 24, image: '/img1/b24.png', image2: '/img2/p24.jpg', name: "Starbucks",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 25. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-25" defaultValue={2} max={5} /></Box>,
      id: 25, image: '/img1/b25.jpg', image2: '/img2/p25.jpg', name: 'Philips',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 26. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-26" defaultValue={2} max={5} /></Box>,
      id: 26, image: '/img1/b26.jpg', image2: '/img2/p26.jpg', name: 'Panasonic',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 27. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-27" defaultValue={2} max={5} /></Box>,
      id: 27, image: '/img1/b27.jpg', image2: '/img2/p27.jpg', name: "Skoda",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 28. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-28" defaultValue={2} max={5} /></Box>,
      id: 28, image: '/img1/b28.jpg', image2: '/img2/p28.jpg', name: "Motorola",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 29. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-29" defaultValue={2} max={5} /></Box>,
      id: 29, image: '/img1/b29.jpg', image2: '/img2/p29.webp', name: 'Amazon',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 30. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-30" defaultValue={2} max={5} /></Box>,
      id: 30, image: '/img1/b30.webp', image2: '/img2/p30.jpg', name: "Nike",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 31. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-31" defaultValue={2} max={5} /></Box>,
      id: 31, image: '/img1/b31.jpg', image2: '/img2/p31.jpg', name: 'Puma',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 32. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-32" defaultValue={2} max={5} /></Box>,
      id: 32, image: '/img1/b32.jpg', image2: '/img2/p32.jpg', name: "Reebok",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 33. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-33" defaultValue={2} max={5} /></Box>,
      id: 33, image: '/img1/b33.webp', image2: '/img2/p33.jpg', name: 'Nokia',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 34. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-34" defaultValue={2} max={5} /></Box>,
      id: 34, image: '/img1/b34.gif', image2: '/img2/p34.jpg', name: 'LG',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 35. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-35" defaultValue={2} max={5} /></Box>,
      id: 35, image: '/img1/b35.jpg', image2: '/img2/p35.jpg', name: 'Toshiba',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 36. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-36" defaultValue={2} max={5} /></Box>,
      id: 36, image: '/img1/b36.jpg', image2: '/img2/p36.jpg', name: "Mitsubishi",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                    //! 37. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-37" defaultValue={2} max={5} /></Box>,
      id: 37, image: '/img1/b37.png', image2: '/img2/p37.jpg', name: 'Volkswagen',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                         //! 38. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-38" defaultValue={2} max={5} /></Box>,
      id: 38, image: '/img1/b38.png', image2: '/img2/p38.jpg', name: 'RedBull',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                          //! 39. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-39" defaultValue={2} max={5} /></Box>,
      id: 39, image: '/img1/b39.png', image2: '/img2/p39.jpg', name: 'Canon',
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
    {                        //! 40. card
      rating: <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="ml-4" component="legend">Rating</Typography>
        <Rating name="customized-40" defaultValue={2} max={5} /></Box>,
      id: 40, image: '/img1/b40.jpg', image2: '/img2/p40.jpg', name: "Nivea",
      icon1: <i className="ml-3 fa fa-thumbs-o-up fa-3x text-success mt-2" aria-hidden="true"></i>,
      return: '%93', returnText: 'Return rate',
      icon2: <i className="ml-3 fa fa-clock-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      speed: 'Too fast', speedText: 'Average Return',
      icon3: <i className="ml-3 fa fa-check-square-o fa-3x text-success mt-2" aria-hidden="true"></i>,
      resolved: '%81', resolvedText: 'Resolved'
    },
  ]
}
