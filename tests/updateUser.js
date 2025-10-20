const { expect } = require("chai");

describe("PATCH - Update User", () => {
  it("Update User Successfully", async () => {
    const requestBody = {
      name: "momo",
      job: "Software Engineer",
    };

    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();
    console.log(responseData);
    expect(response.status).to.equal(200);
    expect(responseData.name).to.equal(requestBody.name);
    expect(responseData.job).to.equal(requestBody.job);
    expect(responseData.updatedAt).to.not.be.null;
  });
});
