import Vue from 'vue'
import MapUploader from '@/components/MapUploader'

describe('MapUploader component', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MapUploader)
    const vm = new Constructor().$mount()
    expect(vm.$el.nodeName).to.equal('INPUT')
    expect(vm.$el.type).to.equal('file')
  })
})
