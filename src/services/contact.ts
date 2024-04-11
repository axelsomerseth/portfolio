const { REACT_APP_CONTACT_ENDPOINT } = process.env;

const contactMe = async (name: string, email: string, message: string) => {
  const response = await fetch(REACT_APP_CONTACT_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  return response.status === 200;
};

export { contactMe };
