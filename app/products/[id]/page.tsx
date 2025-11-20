import Link from "next/link";

export default async function ID({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <h1>Product ID: {id}</h1>
      <Link href="/products">View products</Link>
    </>
  );
}