# Kidz-school-website-and-Restful-API-using TypeScript
It will demonstrate my database skill and RESTful API using TypeScript

I created the RESTful API using typescript. 
My school website will be updated dainamically using my own RESTful API.
To run this project you need to download both the folders.

After that please follow the below instuction: 
  1. Run npm start in both the folder.
  2. Open the index.htm from Kidz-School-Website folder using a browser. 
  3. Refresh the browser. You will find that the cart value at the top right most corner of the browser, "Teacher" section in the middle of the browser
  and "Our Class" section under the "Teacher" section is updated dainamically. In otherwords these three section are fatching the data from my own API. 
  4. If you want to play more with my API then please open "Kidz-School-Website > app > api.ts" using a code editor (i.e VS code editor) and change these
  3 lines of codes
      before Change: 
          const carts = await get("cart?customerId=1");
          const teachers = await get("teacher");
          const ourclasses = await get("class");        
          
      after Change: 
          const carts = await get("cart?customerId=2");
          const teachers = await get("teacher/2");
          const ourclasses = await get("class/3");   
          
     And then you will find an interesting dinamic school website.  
