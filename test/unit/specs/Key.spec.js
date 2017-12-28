import Vue from 'vue'
import Key from '@/components/Key'

describe('Key component', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Key)
    const propsData = {
      keyCode: 'Enter',
      label: 'ENT'
    }
    const { $el } = new Constructor({propsData}).$mount()
    expect($el.querySelector('.key').textContent).to.contain('ENT')
    expect($el.classList.contains('Enter')).to.equal(true)
  })

  it('should add isActive class', done => {
    const Constructor = Vue.extend(Key)
    const propsData = {
      isActive: false
    }
    const vm = new Constructor({propsData}).$mount()
    expect(vm.$el.querySelector('.key.active')).to.equal(null)
    vm.isActive = true
    Vue.nextTick(() => {
      expect(vm.$el.querySelectorAll('.key.active')).not.to.equal(null)
      done()
    })
  })
})
