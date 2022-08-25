
module.exports = ({ env }) => ({

      upload: {
            provider:'cloudinary',
            providerOptions:{
                cloud_name:env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
      },
       actionOptions:{
                upload:{},
                uploadStream: {
                   folder: "ENGIRICENTER",
                },
                delete:{},
                
            },
    
    }
});


// module.exports = ({ env }) => {

//   if(env('NODE_ENV') === 'production'){
//     return  {

//       upload: {
//         provider: 'uploadcare',
//         providerOptions: {
//           public_key: env('UPLOADCARE_PUBLIC_KEY'),
//           secret_key: env('UPLOADCARE_SECRET_KEY'),
//         },
//       },
//       // upload:{
//       //       provider:'cloudinary',
//       //       providerOptions:{
//       //           cloud_name:env('CLOUDINARY_NAME'),
//       //           api_key: env('CLOUDINARY_KEY'),
//       //           api_secret: env('CLOUDINARY_SECRET'),
//       //           // upload_preset: env('CLOUDINARY_UPLOAD_PRESET'),
            
//             // actionOptions:{
//             //     upload:{},
//             //     uploadStream: {
//             //        folder: "ENGIRICENTER",
//             //     },
//             //     delete:{},
                
//             // },
//         // },
  
//     }
//   } else{
//     return {
//       upload: {
//         provider: 'uploadcare',
//         providerOptions: {
//           public_key: env('UPLOADCARE_PUBLIC_KEY'),
//           secret_key: env('UPLOADCARE_SECRET_KEY'),
//         },
//       }
//     };
//   }
//   // else{
//   //   return  { 
//   //      upload:{
//   //           provider:'cloudinary',
//   //           providerOptions:{
//   //               cloud_name:env('CLOUDINARY_NAME'),
//   //               api_key: env('CLOUDINARY_KEY'),
//   //               api_secret: env('CLOUDINARY_SECRET'),
//   //               // upload_preset: env('CLOUDINARY_UPLOAD_PRESET'),
//   //           } 
//   //         }
//   //         };
//   // }


//   return {
//     email: {
//       provider: 'sendgrid',
//       providerOptions: {
//         apiKey: env('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'),
//       },
//       settings: {
//         defaultFrom: 'nsambai72@gmail.com',
//         defaultReplyTo: 'nsambai72@gmail.com',
//         testAddress: 'nsambai72@gmail.com',
//       },
//     },

//     other_plugins:{}
//   }
  
 

// };



// module.exports = ({ env })=> ({
//         // CLOUDINARY_URL=cloudinary://842755312754361:BMO579r1fQKABRKoV3bHRbmd7e4@ivhfizons
//         upload: {
//           provider: 'uploadcare',
//           providerOptions: {
//             public_key: env('UPLOADCARE_PUBLIC_KEY'),
//             secret_key: env('UPLOADCARE_SECRET_KEY'),
//           },
//         },
    
    

// })