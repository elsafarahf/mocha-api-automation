const { expect } = require("chai");

describe("GET - Get User List", () => {
  it("Get Multiple List Users", async () => {
    const response = await fetch("https://reqres.in/api/users?page=2", {
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    expect(response.status).to.equal(200);
    expect(responseData.page).to.equal(2);
    expect(responseData.per_page).to.equal(6);
    expect(responseData.total).to.equal(12);
    expect(responseData.total_pages).to.equal(2);

    responseData.data.forEach((user) => {
      expect(user.id).to.be.a("number");
      expect(user.email).to.be.a("string").and.include("@reqres.in");
      expect(user.first_name).to.be.a("string");
      expect(user.last_name).to.be.a("string");
      expect(user.avatar).to.match(/^https?:\/\/[^\s$.?#].[^\s]*$/);
    });
  });

  it("Get Single User", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    expect(response.status).to.equal(200);
    expect(responseData.data.email).to.equal("janet.weaver@reqres.in");
    expect(responseData.data.first_name).to.equal("Janet");
    expect(responseData.data.last_name).to.equal("Weaver");
    expect(responseData.data.avatar).to.equal(
      "https://reqres.in/img/faces/2-image.jpg"
    );
  });

  it("Get Single User with Invalid ID", async () => {
    const response = await fetch("https://reqres.in/api/users/elsa", {
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    });

    console.log("Status Code:", response.status);
    expect(response.status).to.equal(404);
  });
});
