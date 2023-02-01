import { GetTenantResponse, useApi } from '@/lib/useApi'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'

const Home = (props: Props) => {
    return (
        <div>
            Seja bem vindo {props.tenant.name}
        </div>
    )
}

export default Home

type Props = {
    tenant: GetTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { tenant: tenantSlug } = ctx.query
    const api = useApi()

    if (!tenantSlug) {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    // Get tanant
    const tenant = await api.getTenant(tenantSlug as string)

    if (!tenant) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: { tenant }
    }
}