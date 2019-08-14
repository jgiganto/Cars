using Bsd.Cars.Application.Shared;
using Bsd.Cars.Application.Vehicles.Queries;
using Bsd.Cars.Application.Vehicles.Responses;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Bsd.Cars.Application.Vehicles
{
    public class GetVehiclesRequest : PaginatedRequest, IRequest<PaginatedResponse<VehicleModel>>
    { }

    public class GetVehiclesHandler : IRequestHandler<GetVehiclesRequest, PaginatedResponse<VehicleModel>>
    {
        private readonly IGetVehicles _query;

        public GetVehiclesHandler(IGetVehicles query)
        {
            _query = query;
        }

        public async Task<PaginatedResponse<VehicleModel>> Handle(GetVehiclesRequest request, CancellationToken cancellationToken)
        {
            return await _query.Query(request, cancellationToken);
        }
    }
}
