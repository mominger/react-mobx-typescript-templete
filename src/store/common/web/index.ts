import { action, observable } from 'mobx';
import UAParser from 'ua-parser-js';

export default class WebStore {
  @observable deviceType: string;
  @observable isMobile: boolean;

  @action
  init = (userAgent: string) => {
    this.isMobile = this.isMobileDevice(userAgent);
    this.deviceType = this.isMobile ? 'mobile' : 'desktop';
  };

  isMobileDevice = (userAgent: string) => {
    const uaParser = new UAParser(userAgent);
    const device = uaParser.getDevice();
    return this.hasDeviceAttributes(device);
  };

  hasDeviceAttributes = ({ model, type, vendor }: UAParser.IDevice) => {
    return Boolean(model || type || vendor);
  };
}
