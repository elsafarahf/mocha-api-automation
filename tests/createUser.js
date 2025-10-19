const { expect } = require("chai");

describe("POST - Create User", () => {
  it("Create User Successfully", async () => {
    const requestBody = {
      name: "elsa farah",
      job: "QA",
    };

    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();
    console.log(responseData);
    expect(response.status).to.equal(201);
    expect(responseData.name).to.equal(requestBody.name);
    expect(responseData.job).to.equal(requestBody.job);
    expect(responseData.id).to.exist;
    expect(responseData.createdAt).to.not.be.null;
  });
});
