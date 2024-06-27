import { Input } from "@/components/ui/input";
const SearchBar = () => {
  return (
    <div className="absolute w-1/4 left-1/2 -translate-x-1/2">
      <Input type="email" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
