So lets say were building a blog application using python fastapi framework and there are six developers on the team.
So when we setup CI for our app we ensure that our code goes through all these steps:
Linting: To keep our code clean without any stylistic and syntactical errors. The common tools used for linting in a python web app are pylint, ruff,flake8 etc.
Testing: To ensure our code doesn't break the existing app. Common tools include Pytest, Behave, etc which are robust and ensure our app is working as it should.
Building: Convert the code into deployable software. As python is an interpreted language build isn't required, but we use some packaging tools to bundle our app.

Instead of using Jenkins or Github Actions for setting up the CI setup we can also use other alternatives which are getting popular these days namely GitLab an alternative to Github or Azure Devops a CI solution from microsoft.

This setup could be deployed in a self hosted server or a cloud based environment. But looking at the small amount of code which is required for the app and the absence of the build step it makes cloud based environment a good fit for the project. We can also save up by deploying in a cloud environment compared to a server setup which would cost a lot on our pocket and whose setup is cumbersome. Even though in the long run cloud might cost more but for a app with this scale, it would be better to deploy in a cloud environment which would be easy to setup and maintain, which inturns removes the neccessity of maintaining the server and making sure it is up all the time.
