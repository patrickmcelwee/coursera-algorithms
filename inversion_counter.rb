class InversionCounter

  def count(array)
    _count_and_sort(array)[0]
  end

  private

  def _count_and_sort(array)
    if array.size == 1
      return [0, array]
    end

    left, right = array.each_slice( (array.size / 2.0).round ).to_a

    left_count, sorted_left = _count_and_sort(left)
    right_count, sorted_right = _count_and_sort(right)
    merge_count, sorted_array = _merge_and_count(sorted_left, sorted_right)

    [(left_count + right_count + merge_count), sorted_array]
  end

  def _merge_and_count(left, right)
    i = 0
    j = 0
    count = 0
    merged = []

    while (i < left.size && j < right.size)
      if left[i] < right[j]
        merged << left[i]
        i += 1
      else
        merged << right[j]
        count += (left.size - i)
        j += 1
      end
    end

    while i < left.size
      merged << left[i]
      i += 1
    end

    while j < right.size
      merged << right[j]
      j += 1
    end

    [count, merged]
  end

end

describe InversionCounter do
  it 'works for one integer' do
    expect(subject.count([1])).to eq(0)
  end

  it 'works for two unsorted integers' do
    expect(subject.count([2, 1])).to eq(1)
  end

  it 'works for two sorted integers' do
    expect(subject.count([1, 2])).to eq(0)
  end

  it 'works for 4 sorted integers' do
    expect(subject.count([1, 2, 3, 4])).to eq(0)
  end

  it 'works for 4 integers with one inversion' do
    expect(subject.count([2, 1, 3, 4])).to eq(1)
    expect(subject.count([1, 3, 2, 4])).to eq(1)
    expect(subject.count([1, 2, 4, 3])).to eq(1)
  end

  it 'works for 4 integers with two inversions' do
    expect(subject.count([3, 1, 2, 4])).to eq(2)
    expect(subject.count([1, 4, 2, 3])).to eq(2)
    expect(subject.count([2, 1, 4, 3])).to eq(2)
    expect(subject.count([2, 3, 1, 4])).to eq(2)
  end

  it 'works for 4 integers with 3 inversions' do
    expect(subject.count([3, 2, 1, 4])).to eq(3)
    expect(subject.count([3, 1, 4, 2])).to eq(3)
    expect(subject.count([4, 1, 2, 3])).to eq(3)
    expect(subject.count([2, 4, 1, 3])).to eq(3)
    expect(subject.count([2, 3, 4, 1])).to eq(3)
    expect(subject.count([1, 4, 3, 2])).to eq(3)
  end

  it 'works for 6 sorted integers' do
    expect(subject.count([1, 2, 3, 4, 5, 6])).to eq(0)
  end

  it 'works for 6 unsorted integers' do
    #expect(subject.count([2, 1, 3, 4, 5, 6])).to eq(1)
    expect(subject.count([1, 2, 4, 3, 5, 6])).to eq(1)
  end

  it 'works for 8 sorted integers' do
    expect(subject.count([1, 2, 3, 4, 5, 6, 7, 8])).to eq(0)
  end

  it 'works for 8 unsorted integers' do
    expect(subject.count([1, 2, 3, 5, 4, 6, 7, 8])).to eq(1)
    expect(subject.count([8, 1, 2, 3, 5, 4, 6, 7])).to eq(8)
    expect(subject.count([8, 1, 5, 2, 3, 4, 6, 7])).to eq(10)
  end

  it 'works for 100 sorted integers' do
    expect(subject.count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])).to eq(0)
  end

  it 'works for 100 unsorted integers' do
    expect(subject.count([2, 3, 9, 4, 5, 6, 7, 8, 10, 11, 1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])).to eq(15)
  end

  it 'works for problem' do
    array = []
    File.read('programming-problem-1/IntegerArray.txt').each_line do |line|
      array << line.chop.to_i
    end
    expect(subject.count(array)).to eq(1033917821)
  end
end

