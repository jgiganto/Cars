using Bsd.Cars.Application.Vehicles.Queries;
using Bsd.Cars.Application.Vehicles.Responses;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Bsd.Cars.Application.Vehicles
{
    public class GetVehicleByIdRequest : IRequest<VehicleModel>
    {
        public int Id { get; set; }
    }

    public sealed class GetCompanyHandler : IRequestHandler<GetVehicleByIdRequest, VehicleModel>
    {
        private readonly IGetVehicleById _query;

        public GetCompanyHandler(IGetVehicleById query)
        {
            _query = query;
        }

        public async Task<VehicleModel> Handle(GetVehicleByIdRequest request, CancellationToken cancellationToken)
        {
            return await _query.Query(request.Id, cancellationToken);
        }
    }
}
