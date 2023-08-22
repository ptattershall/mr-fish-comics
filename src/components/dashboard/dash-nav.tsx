"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import { cn } from '@/lib/utils';

export function DashNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter(); // Get the current route

  const getNavLinkClass = (path: string) => {
    return router.pathname === path ? 'text-muted-foreground' : '';
    console.log(router.pathname);
  };

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <Link href="/AdminDash" className={`text-sm font-medium transition-colors hover:text-primary ${getNavLinkClass('/AdminDash')}`}>
          Overview
      </Link>
      <Link href="/AdminDash/customers" className={`text-sm font-medium transition-colors hover:text-primary ${getNavLinkClass('/AdminDash/customers')}`}>
          Customers
      </Link>
      <Link href="/AdminDash/products" className={`text-sm font-medium transition-colors hover:text-primary ${getNavLinkClass('/AdminDash/products')}`}>
          Products
      </Link>
      <Link href="/AdminDash/battle" className={`text-sm font-medium transition-colors hover:text-primary ${getNavLinkClass('/AdminDash/Battle')}`}>
          Battle
      </Link>
    </nav>
  );
}
