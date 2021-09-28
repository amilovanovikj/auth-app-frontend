import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import RetypePasswordField from "@/components/RetypePasswordField.vue";

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
