# url-shortening-api
![Skærmbillede 2024-04-17 231159](https://github.com/shazkhan2/url-shortening-api/assets/115549210/cfd2578f-32d6-406b-8262-e41f47d1415e)

![Skærmbillede 2024-04-17 231054](https://github.com/shazkhan2/url-shortening-api/assets/115549210/99c8456f-5026-4b3c-938a-dfce3bb357cd)

Lessons learned:
1. Postman does not enforce Cors; Cors errors happen in browsers on the client side.
2. Not all APIs are freely available. In case there are origin access controls, the workaround is to create a server that you can call, which in return will call the API.
3. React and Node are constantly evolving so any unusual errors would require a good understanding and an optimal solution.
4. There is a copy to clipboard library available in React.

Plan B:
If I couldnt make the given API work by the weekend, I shall instead find one that doesnt have any CORS restrictions and it can be called directly from the front end. Its better to start with building a skating board first, then a bicycle then a car and then an aeroplane, rather than start straight with an aeroplance and a year later you have nothing to show. 

Learning objectives for the future:
1. Get comfortable with a design library, ideally Tailwind CSS.
2. Get my code reviewed by a senior mentor to help me simplify it as much as possible.
3. In unfamiliar situations, ask a mentor to show me a course of action early on rather than exhaust all the wrong options before I come to the right solution. 
4. But nothing is more exciting than being stuck in a situation that you cant fathom how to get out of, only to then find a solution and feel elated. Keep coding, keep learning and I love what I do. 


The project became challenging upon getting the error that access from my origin- the localhost- was blocked by CORS policy.
So the first step was to see if I can call the API via postman by following their documentation: https://cleanuri.com/docs . Their documentation is not great, and I had to ask chatGPT what the  -d url=https%3A%2F%2Fgoogle.com%2F' flag in the curl command got translated into. It turns out it becomes a url-encoded-form-body
curl -XPOST -d 'url=https%3A%2F%2Fgoogle.com%2F' 'https://cleanuri.com/api/v1/shorten'. I created a postman request where it works as seen in the picture.
<img width="973" alt="image" src="https://github.com/shazkhan2/url-shortening-api/assets/115549210/788de915-b6e1-4363-9e91-5573153cc255">

Now that it works from Postman it means it should work from any application as well if I call the API the same way. I was calling it by using a json body instead of the url-encoded-form-body. This I thought was most likely the cause of my issues, but it was far from it.
The API I was trying to access does not support CORS, and that it would require a back-end for it to work. Some initial search led me to consider using a proxy server but that was no good. Then a wise man suggested:

"Take a few steps back, you shouldn't need more than:
Your web app makes a request to your API server
Your API server makes a request to the public API you're using to shorten URLs (using node-fetch or similar)
Your API responds with the shorter URL."

I then went on to create the backend but was getting other errors to do with the NPM package. It did not support CommonJS which is an older package specification, which uses require. What I had was instead a new ES6 modules package, which uses import. I then gave my js files the extension .mjs to tell node that this file should use the es module syntax.  and bingo, I got data returned from the API 


