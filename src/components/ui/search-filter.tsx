
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { GOVERNORATES, SPECIALTIES } from "@/types";

interface SearchFilterProps {
  onSearch: (filters: {
    query: string;
    governorate: string;
    city: string;
    specialty: string;
  }) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const [filters, setFilters] = useState({
    query: "",
    governorate: "",
    city: "",
    specialty: "",
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (value: string, name: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              name="query"
              value={filters.query}
              onChange={handleChange}
              placeholder="ابحث عن صنايعي أو مهمة..."
              className="pr-10"
            />
          </div>
          
          <Button
            type="button"
            variant="outline"
            className="md:w-auto flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>فلترة</span>
          </Button>
          
          <Button type="submit" className="md:w-auto">
            بحث
          </Button>
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="governorate">المحافظة</Label>
              <Select
                value={filters.governorate}
                onValueChange={(value) => handleSelectChange(value, "governorate")}
              >
                <SelectTrigger id="governorate">
                  <SelectValue placeholder="اختر المحافظة" />
                </SelectTrigger>
                <SelectContent>
                  {GOVERNORATES.map((gov) => (
                    <SelectItem key={gov} value={gov}>
                      {gov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="city">المدينة</Label>
              <Input
                id="city"
                name="city"
                value={filters.city}
                onChange={handleChange}
                placeholder="أدخل اسم المدينة"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="specialty">التخصص</Label>
              <Select
                value={filters.specialty}
                onValueChange={(value) => handleSelectChange(value, "specialty")}
              >
                <SelectTrigger id="specialty">
                  <SelectValue placeholder="اختر التخصص" />
                </SelectTrigger>
                <SelectContent>
                  {SPECIALTIES.map((specialty) => (
                    <SelectItem key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
