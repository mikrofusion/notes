require 'spec_helper'

describe Test do
  describe '#method' do
    subject { object }

    context 'scenario' do
      let(:object) { Class.new() }

      before  { object.some_method }

      it 'does something' do
        expect(subject.value).to eq val
      end
    end
  end

  
end
