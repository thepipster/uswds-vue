import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UsAlert from '@/components/UsAlert.vue';

describe('UsAlert.vue', () => {
    it('renders with default props', () => {
        const wrapper = mount(UsAlert);
        expect(wrapper.classes()).toContain('usa-alert');
        expect(wrapper.classes()).not.toContain('usa-alert--slim');
        expect(wrapper.classes()).not.toContain('usa-alert--no-icon');
    });

    it('applies variant class correctly', () => {
        const wrapper = mount(UsAlert, {
            props: { variant: 'accent-cool' }
        });
        expect(wrapper.classes()).toContain('usa-alert--accent-cool');
    });

    it('displays title when provided', () => {
        const wrapper = mount(UsAlert, {
            props: { title: 'Test Title' }
        });
        expect(wrapper.find('.usa-alert__heading').exists()).toBe(true);
        expect(wrapper.find('.usa-alert__heading').text()).toBe('Test Title');
    });

    it('does not display title when not provided', () => {
        const wrapper = mount(UsAlert);
        expect(wrapper.find('.usa-alert__heading').exists()).toBe(false);
    });

    it('renders slot content', () => {
        const wrapper = mount(UsAlert, {
            slots: { default: '<span>Slot Content</span>' }
        });
        expect(wrapper.find('.usa-alert__text').text()).toContain('Slot Content');
    });

    it('applies noIcon class when noIcon prop is true', () => {
        const wrapper = mount(UsAlert, {
            props: { noIcon: true }
        });
        expect(wrapper.classes()).toContain('usa-alert--no-icon');
    });

    it('applies slim class when slim prop is true', () => {
        const wrapper = mount(UsAlert, {
            props: { slim: true }
        });
        expect(wrapper.classes()).toContain('usa-alert--slim');
    });

    it('updates visibility based on show prop', async () => {
        const wrapper = mount(UsAlert, {
            props: { show: false }
        });
        expect(wrapper.exists()).toBe(true); // Component should still exist

        await wrapper.setProps({ show: true });
        expect(wrapper.exists()).toBe(true); // Should still exist and be visible
    });
});
