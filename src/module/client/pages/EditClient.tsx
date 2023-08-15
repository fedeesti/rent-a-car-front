import MainLayout from '../../../common/components/layout/MainLayout';
import ClientForm from '../components/form/ClientForm';

function EditClient() {
  return (
    <MainLayout>
      <div className="p-4 mx-auto max-w-2xl lg:py-16" data-cy="edit-client-container">
        <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="edit-client-title">
          Edit client
        </h2>
        <ClientForm />
      </div>
    </MainLayout>
  );
}

export default EditClient;
