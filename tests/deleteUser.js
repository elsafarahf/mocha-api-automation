const { expect } = require("chai");

describe("DELETE - Delete User", () => {
  it("Delete User Successfully", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    });

    console.log("Status Code:", response.status);
    expect(response.status).to.equal(204);
  });

  it("Delete User with Invalid API Key", async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "DELETE",
      headers: {
        "x-api-key": "unkown",
        "Content-Type": "application/json",
      },
    });

    console.log("Status Code:", response.status);
    expect(response.status).to.equal(403);
  });
});
