import Image from 'next/image';
import Link from 'next/link';

const EarnPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-8 py-6">
          <h1 className="text-2xl font-bold text-indigo-700">How can You Earn</h1>
        </div>
      </header>

      <main className="container mx-auto px-8 py-6">
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">Earn as an Ambassador</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor eleifend ligula, non fringilla
                massa consectetur sit amet. Curabitur eu lacus vitae nisl cursus vehicula vel vitae neque. Fusce ut mi
                tellus. Proin varius auctor libero vel mattis. Integer a nulla vel tellus posuere euismod.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nullam rhoncus commodo semper. Proin feugiat lectus ut lorem varius, eget vulputate velit aliquam.
                Donec vel varius diam. Integer nec sem lorem. Integer consequat, massa id interdum mollis, massa est
                lacinia arcu, a commodo nunc augue sed elit. Nulla facilisi.
              </p>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <Image
                src="/designer.jpg"
                alt="Ambassador"
                width={400}
                height={300}
                className="rounded-lg w-full h-80"
              />
            </div>
          </div>
          <Link href="/ambassador" className="mt-4 inline-block bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">Earn as a Designer</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Suspendisse potenti. Mauris tincidunt ex eu ex semper, vitae luctus sem lacinia. Nullam elementum turpis
                in leo faucibus fermentum. Integer ac lacinia nisl. Maecenas tempus nisl eu augue congue fringilla.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fusce nec orci vitae nisi elementum accumsan. Quisque venenatis, ex nec volutpat vulputate, neque enim
                ultricies est, vel aliquam sem ex vel nunc. Aenean in interdum diam. Aliquam nec nisl ut enim cursus
                commodo. Ut et malesuada tellus.
              </p>
            </div>
            <div className="w-full mt-6 md:mt-0">
              <Image
                src="/designer.jpg"
                alt="Designer"
                width={400}
                height={300}
                className="rounded-lg w-full h-80"
              />
            </div>
          </div>
          <Link href="/designer" className="mt-4 inline-block bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </section>
      </main>
    </div>
  );
};

export default EarnPage;
