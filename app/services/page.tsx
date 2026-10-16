import { redirect } from 'next/navigation';

// The Services page was replaced by Products. Keep the old /services URL working.
export default function ServicesPage() {
  redirect('/products');
}
