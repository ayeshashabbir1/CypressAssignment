describe('API Tests', () => {
    
    
    let createdUserId;

  
    // Test to create a new user
    it('Create a new user', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        body: {
          name: 'John Mike',
          username: 'johnmike',
          email: 'johnmike@example.com',
        },
      }).then((response) => {
        createdUserId = response.body.id;
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal('John Mike');
        cy.log(JSON.stringify(response.body));
      });
    });

    // Test to read user data
  it('Read user data', () => {
    cy.request('GET', `https://jsonplaceholder.typicode.com/users/${createdUserId}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal('John Mike');
      cy.log(JSON.stringify(response.body));
    });
  });
 
  
    // Test to update user data
    it('Update user data', () => {
      cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/users/${createdUserId}`,
        body: {
          name: 'Updated John Doe',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Updated John Mike');
      });
    });
  
    //Test to delete user
    it('Delete user', () => {
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/users/${createdUserId}`,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
  