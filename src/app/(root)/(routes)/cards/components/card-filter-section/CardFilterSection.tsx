import FilterFormDialog from '../filter-form-dialog'
import SearchInput from '../search-input'

const CardFilterSection = () => (
  <div className="h-9 flex justify-between items-center mb-6">
    <SearchInput />
    <FilterFormDialog />
  </div>
)
export default CardFilterSection
