export type GetTenantResponse = {
    name: string;
}

export const useApi = () => {
    return {
        getTenant: (tenantSlug: string): GetTenantResponse | boolean => {
            switch (tenantSlug) {
                case 'shinerai':
                    return {
                        name: 'Shinerai'
                    }
                default:
                    return false
            }
        }
    }
}