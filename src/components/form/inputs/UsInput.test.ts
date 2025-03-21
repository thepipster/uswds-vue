import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UsInput from './UsInput.vue';
import { nextTick } from 'vue'

describe('UsInput.vue', () => {
    it('renders the label when provided', () => {
        const wrapper = mount(UsInput, {
            props: { label: 'Test Label', divId: 'test-input' }
        });
        expect(wrapper.find('label').text()).toContain('Test Label');
    });

    it('renders the placeholder correctly', () => {
        const wrapper = mount(UsInput, {
            props: { placeholder: 'Enter text', divId: 'test-input' }
        });
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text');
    });

    it('binds the name attribute correctly', () => {
        const wrapper = mount(UsInput, {
            props: { name: 'username', divId: 'test-input' }
        });
        expect(wrapper.find('input').attributes('name')).toBe('username');
    });

    it('disables input when the disabled prop is true', () => {
        const wrapper = mount(UsInput, {
            props: { disabled: true, divId: 'test-input' }
        });
        expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    });

    it('shows an error message when errors are present', async () => {
        const wrapper = mount(UsInput, {
            props: {
				rules: {required: true},
			}
        });
		const input = wrapper.find('input');
        await input.setValue('New Value');
        await input.setValue('');
		await nextTick();

        expect(wrapper.find('.usa-error-message').exists()).toBe(true);
        expect(wrapper.find('.usa-error-message').text()).toBe('Please enter a value');
    });

    it('updates v-model correctly on user input', async () => {
        const wrapper = mount(UsInput, {
            props: {
				modelValue: '',
				divId: 'test-input',
				//'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
			},
            global: {
                provide: {},
            }
        });

        const input = wrapper.find('input');
        await input.setValue('New Value');

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['New Value']);
    });
});
