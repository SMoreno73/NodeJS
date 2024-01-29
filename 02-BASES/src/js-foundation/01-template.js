const emailTemplate = `
  <div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
  </div>
`;

//This is the way that I can export modules in nodeJS
module.exports = {
  emailTemplate,
};
