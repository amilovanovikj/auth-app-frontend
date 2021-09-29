import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import RetypePasswordField from "@/components/RetypePasswordField.vue";
import EmailField from "@/components/EmailField.vue";

describe("RetypePasswordField.vue", () => {
  it("renders message when isRetypePasswordInvalid is true", () => {
    const wrapper = shallowMount(RetypePasswordField, {
      data () {
        return {
          isRetypePasswordInvalid: true
        }
      }
    });
    expect(wrapper.text()).to.include("passwords must match");
  });
});

describe("EmailField.vue", () => {
  it("renders message when isEmailInvalid is true", () => {
    const wrapper = shallowMount(EmailField, {
      data () {
        return {
          isEmailInvalid: true
        }
      }
    });
    expect(wrapper.text()).to.include("please specify a valid email address");
  });
});