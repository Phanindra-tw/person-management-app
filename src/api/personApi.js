import { Constants } from '../components/common/constants';

export const getPersonAttributeTypeUuid = async attributeName => {
  try {
    const url =
      Constants.personAttributeType + '?q=' + attributeName + '&v=default';
    const response = await fetch(url).then(response => {
      if (!response.status === 200) {
        throw Error({ response: response });
      }
      return response.json();
    });
    return response.results[0].uuid;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const savePerson = async payload => {
  try {
    return await fetch(Constants.person, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      credentials: 'include'
    });
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
