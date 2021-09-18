import axios from 'axios';

export const getProducerNamesAndBillingPlan = ({ agencyId = '', onSuccess = (x) => x } = {}) => {
  if (!!agencyId) {
    return axios
      .get('/agency/' + agencyId)
      .then((response) => onSuccess.call(this, response['data']))
      .catch((error) => console.error(error));
  }
};
