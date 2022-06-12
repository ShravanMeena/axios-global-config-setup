import AxiosRequest from '../configs/AxiosRequest';

const AdditionalService = {};

AdditionalService.updateResource = (url, payload) => AxiosRequest.patch(
  url,
  payload,
);

AdditionalService.deleteResource = (url) => AxiosRequest.delete(
  url,
);

AdditionalService.downloadFile = (url) => AxiosRequest.get(
  url, {
    responseType: 'blob',
  },
);

export default AdditionalService;
