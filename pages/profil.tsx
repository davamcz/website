import { AdminLayout } from "../components/admin/AdminLayout";
import Text from "../components/Text";
import { withAuth } from "../lib/with-auth";



const Profile = () => <AdminLayout><Text>Přihlašovací e-mail</Text></AdminLayout>


export default withAuth(Profile)