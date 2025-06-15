export default function Input({ placeholder, type, id }) {
  return (
    <input
      type={type}
      id={id}
      class="text-md h-15 max-[600px]:h-14 w-[454px] max-[960px]:w-full outline-none font-sans rounded-sm block px-5 py-2.5 bg-gray-950/45 border-[1px] border-zinc-400/60 placeholder-gray-400 text-white"
      placeholder={placeholder}
      required
    />
  );
}
